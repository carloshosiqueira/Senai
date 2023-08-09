#include <stdio.h>
int main(){
	char funcionario[50];
	float filhos;
	float salario;
	//Entrada
	printf("Qual o nome do funcionario? ");
	scanf("%s",&funcionario);
	printf("Qual o salario de %s?",funcionario);
	scanf("%f",&salario);
	printf("Ele tem filhos? Se sim, quantos? ");
	scanf("%f",&filhos);
	if(salario > 2000)
		printf("O salario continua sendo o mesmo de %f",salario);
	else {
			if (salario < 2000 && filhos != 0)
				salario = salario + (filhos * 45); //Eu preciso criar uma variavel para esse conta, e tirar isso daqui? pois com essa conta o "else" fica sem um "if" 
				printf("O salario de %s tem que ser aumentado para %f",funcionario, salario);
			else
				printf("O salario de %s não precisa ser aumentado pois ele não tem filhos",funcionario);
	}
}
