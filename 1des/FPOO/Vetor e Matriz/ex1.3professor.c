#include <stdio.h> //Entrada e Sa�da padr�o
#include <locale.h> //Configura��es de Localiza��o
#include <string.h> //Strings s�o vetores de caracteres

int main(){
	setlocale(LC_ALL,"");//Configura��es
	float nota[5];//Declara��o de um vetor
	float media;
	char nome[20];
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	do{
		printf("Digite a 1� nota entre 0 e 10: ");
		scanf("%f", &nota[0]);
	}while(nota[0] < 0 || nota[0] > 10);
	do{
		printf("Digite a 2� nota entre 0 e 10: ");
		scanf("%f", &nota[1]);
	}while(nota[1] < 0 || nota[1] > 10);
	do{
		printf("Digite a 3� nota entre 0 e 10: ");
		scanf("%f", &nota[2]);
	}while(nota[2] < 0 || nota[2] > 10);
	do{
		printf("Digite a 4� nota entre 0 e 10: ");
		scanf("%f", &nota[3]);
	}while(nota[3] < 0 || nota[3] > 10);
	do{
		printf("Digite a 5� nota entre 0 e 10: ");
		scanf("%f", &nota[4]);
	}while(nota[4] < 0 || nota[4] > 10);
		
	//Processamento
	media = (nota[0] + nota[1] + nota[2] + nota[3] + nota[4]) / 5;
	//Sa�da
	printf("Notas: %.1f %.1f %.1f %.1f %.1f\n", nota[0], nota[1], nota[2], nota[3], nota[4]);
	printf("%s sua m�dia � %.1f", nome, media);
		
	return 0;
}
