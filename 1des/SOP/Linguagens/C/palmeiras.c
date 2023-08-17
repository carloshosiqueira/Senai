#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int opcao;
	printf("O palmeiras tem mundial? Digite 1 para sim e 2 para não: ");
	scanf("%d",&opcao);
	if(opcao == 1)
		printf("Tem não doido, para de sonhar");
	else if (opcao == 2) printf("Boa, acertou a pergunta!!");
	else printf("Você não sabe nem escolher entre 1 ou 2, imagina acertar uma pergunta tão difícil quanto essa!");
	return 0;
}
