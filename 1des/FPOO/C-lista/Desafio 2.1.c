#include <stdio.h>
int main(){
	float a; //Declarando a vari�vel
	float b; //Declarando a vari�vel
	float c; //Declarando a vari�vel
	//Entrada
	printf("Insira os valores em ordem para a conta (a+b)/c \ncomecando por a: ");
	scanf("%f",&a);
	printf("Insira o Valor de b: ");
	scanf("%f",&b);
	printf("Insira o Valor de c ");
	scanf("%f",&c);
	//Processamento
	float resultado = (a+b)/c;
	//Saida
	printf("O resultado da divisao (%.2f + %.2f)/%.2f = %.2f",a,b,c,resultado); //Mostra o Resultado da Divis�o
}
