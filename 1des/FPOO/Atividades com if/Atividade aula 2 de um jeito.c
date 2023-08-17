#include<stdio.h>
int main (){
	float salario; //<=1212 = 7.5% | <=2427.35 = 9% | <=3641.03 = 12% | <=7087.22 = 14% | else 14%
	printf("Qual o salario do funcionario? ");
	scanf("%f",&salario);
	if(salario <= 1212.00)
		printf("O desconto do salario e de: %.2f",salario * 0.075);
	else{
		if(salario <= 2427.35)
			printf("O desconto do salario e de %.2f",salario * 0.09);
		else{
			if(salario <= 3641.03)
				printf("O desconto do salario e de %.2f",salario * 0.12);
			else{
				if(salario <= 7087.22)
					printf("O desconto do salario e de %.2f",salario * 0.14);
				else
					printf("O desconto do salario e de %.2f",salario * 0.14);
			}
		}
	}
}
