package com.yash.summary_meeting.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient;

    public GeminiService(WebClient webClient) {
        this.webClient = webClient;
    }

    public String generateContent(String prompt) {

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="
                        + apiKey;

        String requestBody = String.format("""
                {
                  "contents": [
                    {
                      "parts": [
                        {
                          "text": "%s"
                        }
                      ]
                    }
                  ]
                }
                """, prompt
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n"));

        return webClient
                .post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestBody)
                .retrieve()

                // Handle Gemini Errors
                .onStatus(
                        HttpStatusCode::isError,
                        response -> response.bodyToMono(String.class)
                                .flatMap(errorBody -> {

                                    if (response.statusCode().value() == 400) {
                                        return reactor.core.publisher.Mono.error(
                                                new RuntimeException(
                                                        "Bad Request (400)\n\n" + errorBody
                                                )
                                        );
                                    }

                                    if (response.statusCode().value() == 401) {
                                        return reactor.core.publisher.Mono.error(
                                                new RuntimeException(
                                                        "Unauthorized API Key (401)\n\n" + errorBody
                                                )
                                        );
                                    }

                                    if (response.statusCode().value() == 403) {
                                        return reactor.core.publisher.Mono.error(
                                                new RuntimeException(
                                                        "Permission Denied (403)\n\n" + errorBody
                                                )
                                        );
                                    }

                                    if (response.statusCode().value() == 429) {
                                        return reactor.core.publisher.Mono.error(
                                                new RuntimeException(
                                                        "Gemini API quota exceeded (429).\nPlease wait a few minutes and try again.\n\n"
                                                                + errorBody
                                                )
                                        );
                                    }

                                    return reactor.core.publisher.Mono.error(
                                            new RuntimeException(
                                                    "Gemini API Error\n\n" + errorBody
                                            )
                                    );

                                })
                )

                .bodyToMono(String.class)
                .block();

    }

}