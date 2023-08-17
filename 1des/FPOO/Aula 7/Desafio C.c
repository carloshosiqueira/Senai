#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale (LC_ALL, "");
	//Variaveis
	do{
		char nome[15], continuar[3]; //Nome do usuário e o continuar pra sim ou não
		float sis, dia; //Leitura das medidas de pressão
		float mediasis = 0, mediadia = 0; //Acumuladores iniciados com 0 
		int i, dias; //Contador e total de dias
		//Entrada
		printf("Digite o primeiro nome do cliente: ");
		scanf("%s",&nome);
		printf("Digite quantos dias foram feitas as medições de pressão");
		scanf("%d",dias);
		printf("Digite os %d resultados das medições de pressão de sis e de dia respectivamente separados por espaço \n",dias);
		printf("Sis. Dia.\n");
		for(i = 0; i < dias; i++){
			scanf("%f %f", &sis, &dia);
			mediasis += sis; //+= Pega o resultado anterior e soma
			mediadia += dia;
		}
		//Processamento
		mediasis /= dias;
		mediadia /= dias;
		//Saída
		printf("\n%s tem como média:",nome);
		printf("sis %.0f e como média dia %.0f",mediasis, mediadia);
		//Pergunta se deseja continuar ou encerrar
		printf("Digite sim para continuar ou não para sair: ");
		scanf("%s",&continuar);
	}while(strcmp(continuar,"sim") == 0);
		return 0;
}
