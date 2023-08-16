#include <stdio.h>
#include <locale.h>
int main(){
	setlocale (LC_ALL, "");
	//Variaveis
	float sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5;
	char nome[15];
	//Entrada
	printf("Digite o nome do cliente (somente o primeiro nome): ");
	scanf("%s", &nome);
	printf("Digite o resultado das 5 medições de pressão sis do cliente separadas por espaço entre elas: ");
	scanf("%f %f %f %f %f", &sis1, &sis2, &sis3, &sis4, &sis5);
	printf("Digite o resultado das 5 medições de pressão dia do cliente separadas por espaço entre elas: ");
	scanf("%f %f %f %f %f", &dia1, &dia2, &dia3, &dia4, &dia5);
	//Processamento
	float mediasis = (sis1 + sis2 + sis3 + sis4 + sis5) / 5;
	float mediadia = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
	//Saida
	printf("A média sis do cliente é de %.0f e a média dia é de %.0f",mediasis, mediadia);
	return 0;
}
