#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	
	char times[5][30], continuar[3];
	int i, vitorias, empates, pontos[5], temp;
	int primeiro, segundo, terceiro, quarto, quinto;
	
	do{
	
		for(i = 0; i < 5; i++){
			printf("Escreva o nome do %d time: ", i +1);
			scanf("%s",&times[i]);
			printf("Quantas vit�rias e empates esse time tem respectivamente? ");
			scanf("%d %d",&vitorias, &empates);
			pontos[i] = (vitorias * 3) + empates;
		}
	
		//Entendi como faz organiza os n�mero n�o, principalmente pois o nome do time tem que mudar junto com o time
		for(i = 0; i < 5; i++){
			if( > )
		
		}
		
	    printf("\nClassifica��o\n");
	    for(i = 0; i < 5; i++){
	    	printf("%d�Colocado - Time: %s com %d pontos\n",i + 1, times[i], pontos[i]);	
		}
		
		printf("Deseja fazer os c�lculos de outra tabela? escreva (sim) para continuar ou n�o para sair: ");
		scanf("%s",&continuar);
		
	}while(!strcmp(continuar,"sim"));
		
	return 0;
}
