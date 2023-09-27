#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	
	char produto[5][30],continuar[3];
	float preco[5];
	int i;
	
	do{
	
		for(i = 0; i < 5; i++){
			printf("Qual o nome do produto? ");
			scanf("%s",&produto[i]);
			printf("Quanto ele custa? ");
			scanf("%f",&preco[i]);
		}
		
		for(i = 0; i < 5; i++){
			if(preco[i] <= 1000){
				preco[i] = preco[i] * 1.05;
				printf("O produto %s teve um aumento de 5%% e agora custa R$%.2f\n",produto[i],preco[i]);
			}
			else{
				preco [i] = preco[i] * 1.07;
				printf("O produto %s teve um aumento de 7%% e agora custa R$%.2f\n",produto[i],preco[i]);
			}
		}
	
	printf("Escreva (sim) para continuar usando o programa ou não para sair: ");
	scanf("%s",&continuar);
	
	}while(!strcmp(continuar,"sim"));

	return 0;
	
}
