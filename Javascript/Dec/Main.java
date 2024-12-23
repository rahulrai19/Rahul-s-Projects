import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        for (int t = 0; t < T; t++) {
            int N = scanner.nextInt();
            int K = scanner.nextInt();
            int P = scanner.nextInt();
            int[] cha = new int[N];
            int result = 0;
            int bigchair = 0;
            for (int i = 0; i < N; i++) {
                cha[i] = scanner.nextInt();
                result += cha[i];
                if (cha[i] > bigchair) {
                    bigchair = cha[i];
                }
            }
            int vedt = K + bigchair;
            int varht = P + (result - bigchair);

            if (vedt > varht) {
                System.out.println("Ved");
            } else if (varht > vedt) {
                System.out.println("varht");
            } else {
                System.out.println("Equal");
            }
        }
        scanner.close();
    }
}
