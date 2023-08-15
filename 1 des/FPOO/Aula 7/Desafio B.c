#include <stdio.h>
#include <locale.h>
int main(){
	setlocale (LC_ALL, "");
	//Variaveis
	int sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5;
	char nome[15];
	//Entrada
	printf("Digite o primeiro nome do cliente, os resultados das medições de pressão de sis e de dia respectivamente separados por espaço\n\n");
	scanf("%s %d %d %d %d %d %d %d %d %d %d",&nome,&sis1, &sis2, &sis3, &sis4, &sis5, &dia1, &dia2, &dia3, &dia4, &dia5);
	//Processamento
	float mediasis = (sis1 + sis2 + sis3 + sis4 + sis5) / 5;
	float mediadia = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
	//Saída
	printf("\n\n%s tem como média sis %.0f e como média dia %.0f",nome, mediasis, mediadia);
	return 0;
}
