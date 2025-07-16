@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String spotifyId;
    private String accessToken;
    private String refreshToken;
    private String email;
    private String displayName;

    // getters y setters
}
