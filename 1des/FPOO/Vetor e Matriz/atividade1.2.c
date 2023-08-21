#include <stdio.h> //Entrada e Saída padrão
#include <locale.h> //Configurações de Localização
#include <string.h> //Strings são vetores de caracteres

int main(){
	setlocale(LC_ALL, "");//Configurações
	char times[5][20];
	int pontos[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("Digite o nome do %dª time: ", i + 1);
		gets(times[i]); //É usado para pegar strings com espaço, coisa que o scanf não faz. Porém ele n fuinciona bem com números , por isso é preciso fazer um for para os times e outros para os pontos.
	}
	for(i = 0; i < 5; i++){
		printf("Digite pontos do %s: ",times[i]);
		scanf("%d",&pontos[i]);
	}
	printf("%s pontos: %d\n", times[0], pontos[0]);
	printf("%s pontos: %d\n", times[1], pontos[1]);
	printf("%s pontos: %d\n", times[2], pontos[2]);
	printf("%s pontos: %d\n", times[3], pontos[3]);
	printf("%s pontos: %d\n", times[4], pontos[4]);

	return 0;
}
