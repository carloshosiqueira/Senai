#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale (LC_ALL, "");
	//Variaveis
	do{
		char nome[15], continuar[3]; //Nome do usu�rio e o continuar pra sim ou n�o
		float sis, dia; //Leitura das medidas de press�o
		float mediasis = 0, mediadia = 0; //Acumuladores iniciados com 0 
		int i, dias; //Contador e total de dias
		//Entrada
		printf("Digite o primeiro nome do cliente: ");
		scanf("%s",&nome);
		printf("Digite quantos dias foram feitas as medi��es de press�o");
		scanf("%d",dias);
		printf("Digite os %d resultados das medi��es de press�o de sis e de dia respectivamente separados por espa�o \n",dias);
		printf("Sis. Dia.\n");
		for(i = 0; i < dias; i++){
			scanf("%f %f", &sis, &dia);
			mediasis += sis; //+= Pega o resultado anterior e soma
			mediadia += dia;
		}
		//Processamento
		mediasis /= dias;
		mediadia /= dias;
		//Sa�da
		printf("\n%s tem como m�dia:",nome);
		printf("sis %.0f e como m�dia dia %.0f",mediasis, mediadia);
		//Pergunta se deseja continuar ou encerrar
		printf("Digite sim para continuar ou n�o para sair: ");
		scanf("%s",&continuar);
	}while(strcmp(continuar,"sim") == 0);
		return 0;
}
