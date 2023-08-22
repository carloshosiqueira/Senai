#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 8\n\n");
	int ni, nf, i;
	printf("Escreva número que deseja ver o fatorial: ");
	scanf("%d",&ni);
	nf = ni * 1;
	for(i = 1; i < ni; i++){
		nf *= i;
	}
		
		printf("Fatorial = %d", nf);
	return 0;
}
