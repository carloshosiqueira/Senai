#include <stdio.h> //Entrada e Sa�da padr�o
#include <locale.h> //Configura��es de Localiza��o
#include <string.h> //Strings s�o vetores de caracteres

int main(){
	setlocale(LC_ALL,"");//Configura��es
	float nota[5];//Declara��o de um vetor
	float media;
	char nome[20];
	int i; //�ndice
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	for(i = 0; i < 5; i++){
		do{
			printf("Digite a %d� nota entre 0 e 10: ", i + 1);
			scanf("%f", &nota[i]);
		}while(nota[i] < 0 || nota[i] > 10);
	}
	
	//Processamento + sa�da
	for(i = 0; i < 5; i++){
		media += nota[i]; //algoritimo de acumula��o
		//Sa�da
		printf("Nota %d: %.1f\n", i + 1, nota[i]);
	}
	media /= 5;
	printf("%s sua m�dia � %.1f", nome, media);
		
	return 0;
}
