#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 8\n\n");
	int ni, nf,continuar, i;
	
	do{
		

	printf("Escreva número que deseja ver o fatorial: ");
	scanf("%d",&ni);
	
	nf = ni * 1;
	
	for(i = 1; i < ni; i++){
		nf *= i;
	}
		
		printf("Fatorial = %d\n\n", nf);
		
		printf("Escreva 1 para continuar ou 0 para sair: ");
		scanf("%d",&continuar);
		
	}while(continuar == 1);
	return 0;
}
