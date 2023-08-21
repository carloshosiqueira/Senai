#include <stdio.h>
#include <string.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int pontos[5], i, campeao, rebaixado, cont;
	char times[5][30];
	

			
	for(i = 0; i < 5; i++){	
			printf("Escreva o nome do %dº time: ", i + 1);
			scanf("%s",&times[i]);
			printf("Digite a quantidade de pontos que esse time tem: ");
			scanf("%d",&pontos[i]);
	}
	printf("O time %s tem %d pontos\n", times[0], pontos[0]);
	printf("O time %s tem %d pontos\n", times[1], pontos[1]);
	printf("O time %s tem %d pontos\n", times[2], pontos[2]);
	printf("O time %s tem %d pontos\n", times[3], pontos[3]);
	printf("O time %s tem %d pontos\n", times[4], pontos[4]);
	
	//Campeão
	if(pontos[0] > pontos[1] && pontos[0] > pontos[2] && pontos[0] > pontos[3] && pontos[0] > pontos[4]) 
	printf("\n\nO time %s é o campeão com %d!!", times[0], pontos[0]);
	else if(pontos[1] > pontos[0] && pontos[1] > pontos[2] && pontos[1] > pontos[3] && pontos[1] > pontos[4]) 
	printf("\n\nO time %s é o campeão com %d!!", times[1], pontos[1]);
	else if(pontos[2] > pontos[0] && pontos[2] > pontos[1] && pontos[2] > pontos[3] && pontos[2] > pontos[4]) 
	printf("\n\nO time %s é o campeão com %d!!", times[2], pontos[2]);
	else if(pontos[3] > pontos[0] && pontos[3] > pontos[1] && pontos[3] > pontos[2] && pontos[3] > pontos[4]) 
	printf("\n\nO time %s é o campeão com %d!!", times[3], pontos[3]);
	else if(pontos[4] > pontos[0] && pontos[4] > pontos[1] && pontos[4] > pontos[2] && pontos[4] > pontos[3]) 
	printf("\n\nO time %s é o campeão com %d!!", times[4], pontos[4]);

	//Rebaixado
	
	if(pontos[0] < pontos[1] && pontos[0] < pontos[2] && pontos[0] < pontos[3] && pontos[0] < pontos[4]) 
	printf("\n\nO time %s é o rebaixado com %d!!", times[0], pontos[0]);
	else if (pontos[1] < pontos[0] && pontos[1] < pontos[2] && pontos[1] < pontos[3] && pontos[1] < pontos[4]) 
	printf("\n\nO time %s é o rebaixado com %d!!", times[1], pontos[1]);
	else if (pontos[2] < pontos[0] && pontos[2] < pontos[1] && pontos[2] < pontos[3] && pontos[2] < pontos[4]) 
	printf("\n\nO time %s é o rebaixado com %d!!", times[2], pontos[2]);
	else if (pontos[3] < pontos[0] && pontos[3] < pontos[1] && pontos[3] < pontos[2] && pontos[3] < pontos[4]) 
	printf("\n\nO time %s é o rebaixado com %d!!", times[3], pontos[3]);
	else if (pontos[4] < pontos[0] && pontos[4] < pontos[1] && pontos[4] < pontos[2] && pontos[4] < pontos[3]) 
	printf("\n\nO time %s é o rebaixado com %d!!", times[4], pontos[4]);
	
	
	
	return 0;	

}
