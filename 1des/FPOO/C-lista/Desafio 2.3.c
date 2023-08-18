#include <stdio.h>
int main(){
	char nome[50];
	float salario;
	float reajuste;
	printf("Insira o nome do funcionario: ");
	scanf("%s,",&nome);
	printf("Insira o salario do funcionario: ");
	scanf("%f",&salario);
	printf("Qual a porcentagem de reajuste? ");
	scanf("%f",&reajuste);
	float novo_salario = salario + (salario * reajuste)/100;
	printf("O novo salario de %s e de : %.2f reais",nome,novo_salario);
}
