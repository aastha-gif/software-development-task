import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

    public class FetchJoke {

        public static void main(String[] args) {

            try {
                // Create HTTP client
                HttpClient client = HttpClient.newHttpClient();

                // Create request
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create("https://official-joke-api.appspot.com/random_joke"))
                        .GET()
                        .build();

                // Send request
                HttpResponse<String> response = client.send(request,
                        HttpResponse.BodyHandlers.ofString());

                // Check if successful
                if (response.statusCode() == 200) {

                    String body = response.body();

                    // Extract JSON values manually
                    String setup = body.split("\"setup\":\"")[1].split("\",")[0];
                    String punchline = body.split("\"punchline\":\"")[1].split("\"")[0];

                    System.out.println("\n😂 Random Joke:\n");
                    System.out.println(setup);
                    System.out.println(punchline);

                } else {
                    System.out.println("Failed! Status Code: " + response.statusCode());
                }

            } catch (Exception e) {
                System.out.println("Error occurred: " + e.getMessage());
            }
        }
    }

