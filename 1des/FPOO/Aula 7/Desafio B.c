#include <stdio.h>
#include <locale.h>
int main(){
	setlocale (LC_ALL, "");
	//Variaveis
	int sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5;
	char nome[15];
	//Entrada
	printf("Digite o primeiro nome do cliente, os resultados das medi��es de press�o de sis e de dia respectivamente separados por espa�o\n\n");
	scanf("%s %d %d %d %d %d %d %d %d %d %d",&nome,&sis1, &sis2, &sis3, &sis4, &sis5, &dia1, &dia2, &dia3, &dia4, &dia5);
	//Processamento
	float mediasis = (sis1 + sis2 + sis3 + sis4 + sis5) / 5;
	float mediadia = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
	//Sa�da
	printf("\n\n%s tem como m�dia sis %.0f e como m�dia dia %.0f",nome, mediasis, mediadia);
	return 0;
}
