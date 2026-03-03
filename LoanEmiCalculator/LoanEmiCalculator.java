import java.util.Scanner;

public class LoanEmiCalculator {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Loan EMI Calculator..");

        System.out.println("Enter Principle Amount : ");
        double principal = in.nextDouble();

        System.out.println("Enter Annual Interest Rate : ");
        String rateInput = in.next();
        rateInput = rateInput.replace("%", "");
        double annualRate = Double.parseDouble(rateInput);

        System.out.println("Enter loan tenure (in years) : ");
        double tenureYears = in.nextDouble();

        double monthlyRate = (a / ( 12 * 100 ) ) ;
        double months = t * 12;

        double emi = ( p * m * Math.pow(1 + m, months )) / (Math.pow(1 + m, months) - 1);
        {
            System.out.printf("Your EMI is: %.2f\n", emi);
            in.close();
        }

    }
}
