#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	
	char cidades[5][30];
	int i, eleitores[5], validos, votos;
	float porcentagem[5];
	

	for(i = 0; i < 5; i++){
		printf("Escreva o nome da %d� cidade: ", i + 1);
		scanf("%s",&cidades[i]);
		printf("Escreva o total de eleitores dessa cidade: ");
		scanf("%d",&eleitores[i]);
		validos += eleitores[i];
	}
	
	printf("\nQual o total de votos nessa elei��o? ");
	scanf("%d",&votos);
	
	if(validos < votos){	
		for(i = 0; i < 5; i++){
			porcentagem[i] = (float) eleitores[i] / votos * 100;
			printf("A participa��o de %s � de %.2f%%\n",cidades[i], porcentagem[i]);
		}
	}
	else printf("\n\nVota��o Inv�lida!");
	return 0;
}
