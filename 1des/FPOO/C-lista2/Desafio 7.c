//7 Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, os cinco números em ordem crescente.
#include <stdio.h>
#include <locale.h>
int main(){
	/*
	
	
	
							FEITO COM A AJUDA DO PROFESSOR RENATO
							
							
							
							
							
							
							
	*/
	setlocale(LC_ALL, "");
	//Variaveis
	float valor1, valor2, valor3, valor4, valor5, maior12, maior34, maior45, menor12, menor34, menor45;
	//Entrada
	printf("Insira os 5 valores: ");
	scanf("%f %f %f %f %f",&valor1, &valor2, &valor3, &valor4, &valor5);
	
	if(valor1 > valor2){
		maior12 = valor1;
		menor12 = valor2;
	}
	else 
		maior12 = valor2;
		menor12 = valor1;
		
	if(valor3 > valor4){
		maior34 = valor3;
		menor34 = valor4;
	}
	else 
		maior34 = valor4;
		menor34 = valor3;
		
	if(valor4 > valor5){
		maior45 = valor4;
		menor45 = valor5;
	}
	else 
		maior45 = valor5;
		menor45 = valor4;
	printf("%f, %f, %f\n",maior12,maior34,maior45);
	printf("%f, %f, %f\n\n",menor12,menor34,menor45);
	printf("%.2f | %.2f | %.2f | %.2f | %.2f |",menor12,maior12,menor34,maior34,maior45);
}
	
