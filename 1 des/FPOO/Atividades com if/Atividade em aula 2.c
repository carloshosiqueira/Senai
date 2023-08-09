#include<stdio.h>
int main (){
	//<=1320.01 = 7.5% | <=2571.29 = 9% | <=3856.94 = 12% | <=7507.29 = 14%
	float salario, resto1, resto2, resto3, resto4, desconto1, desconto2, desconto3, desconto4;
	printf("Qual o salario do funcionario? ");
	scanf("%f",&salario);
	desconto1 = salario * 0.075; desconto2 = salario * 0.09;
	desconto3 = salario * 0.12; desconto4 = salario * 0.14;
	resto1 = salario - desconto1; resto2 = salario - desconto2;
	resto3 = salario - desconto3; resto4 = salario - desconto4;
	if(salario <= 1320.01) printf("O desconto do salario e de: %.2f e um salario restante e de: %.2f",desconto1, resto1);
	else if (salario <= 2571.29) printf("O desconto do salario e de: %.2f e um salario restante e de: %.2f",desconto2, resto2);
	else if (salario <= 3856.94) printf("O desconto do salario e de: %.2f e um salario restante e de: %.2f",desconto3, resto3);
	else if (salario <= 7507.29) printf("O desconto do salario e de: %.2f e um salario restante e de: %.2f",desconto4, resto4);
	else printf("O desconto do salario e de: %.2f e um salario restante e de: %.2f",desconto4,resto4);
}
