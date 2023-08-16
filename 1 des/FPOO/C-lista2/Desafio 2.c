#include <stdio.h>
int main(){
	char funcionario[50];
	int filhos;
	float salario;
	//Entrada
	printf("Qual o nome do funcionario? ");
	scanf("%s",&funcionario);
	printf("Qual o salario de %s?",funcionario);
	scanf("%f",&salario);
	printf("Quantos filhos ele tem? ");
	scanf("%d",&filhos);
	//Processamento
	float remuneracao = salario + (filhos * 45);
	//Saída
	if(salario > 2000)
		printf("O salario continua sendo o mesmo de %.2f",salario);
	else {
			if (salario <= 2000 && filhos != 0)
				printf("O salario de %s tem que ser aumentado para %.2f reais",funcionario, remuneracao);
			else
				printf("O salario de %s nao precisa ser aumentado pois ele nao tem filhos",funcionario);
	}
}
