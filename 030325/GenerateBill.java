import java.util.*;
import java.io.*;
abstract class Plan{
	protected double rate;
	abstract void getRate();
	public  void calculateBill(int units) {
		System.out.println(units*rate);
	}
}
class DomesticPlan extends Plan{
	//@override
	public void getRate() {
		rate=3.50;
	}
}
class CommercialPlan extends Plan{
	//@override
	public void getRate() {
		rate=7.50;
	}
}
class InstitutionalPlan extends Plan{
	//@override
	public void getRate() {
		rate=5.50;
	}
}
class GetPlanFactory{
	public Plan getPlan(String planType) {
		if(planType==null) {
			return null;
		}
		if(planType.equalsIgnoreCase("1")) {
			return new DomesticPlan();
		}
		else if(planType.equalsIgnoreCase("2")) {
			return new CommercialPlan();
		}
		else if(planType.equalsIgnoreCase("3")) {
			return new InstitutionalPlan();
		}
		return null;
	}
}
public class GenerateBill {
	public static void main(String[]args)throws IOException {
		GetPlanFactory planFactory=new GetPlanFactory();
		System.out.print("Enter the name of plan for which the bill will be generated(1.domestic 2.commercial 3.institutional):");
		Scanner sc=new Scanner(System.in);
		String planName=sc.nextLine();
		System.out.print("Enter the number of units for bill will be calculated:");
		int units=Integer.parseInt(sc.nextLine());
		Plan p=planFactory.getPlan(planName);
		System.out.print("Bill amt for "+planName+" of "+units+" units is: ");
		p.getRate();
		p.calculateBill(units);
	}
}