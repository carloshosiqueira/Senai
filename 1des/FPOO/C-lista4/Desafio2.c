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
			printf("Quantas vitórias e empates esse time tem respectivamente? ");
			scanf("%d %d",&vitorias, &empates);
			pontos[i] = (vitorias * 3) + empates;
		}
	
		//Entendi como faz organiza os número não, principalmente pois o nome do time tem que mudar junto com o time
		for(i = 0; i < 5; i++){
			if( > )
		
		}
		
	    printf("\nClassificação\n");
	    for(i = 0; i < 5; i++){
	    	printf("%d°Colocado - Time: %s com %d pontos\n",i + 1, times[i], pontos[i]);	
		}
		
		printf("Deseja fazer os cálculos de outra tabela? escreva (sim) para continuar ou não para sair: ");
		scanf("%s",&continuar);
		
	}while(!strcmp(continuar,"sim"));
		
	return 0;
}
