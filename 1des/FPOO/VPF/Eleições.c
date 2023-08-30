#include <stdio.h>
#include <locale.h>
//Código Muito incompleto
int main(){
	setlocale(LC_ALL,"");
	char cidade[30], nome[30];
	float candidatos, votos, brancos, nulos, validos, invalidos, total;
	int i, continuar;
	
	do{
		
		printf("Escreva o nome da cidade: ");
		scanf("%s",&cidade);
		printf("Escreva a quantidade de candidatos a prefeito: ");
		scanf("%d",&candidatos);
		printf("Quantos votos em branco teve essa eleição? ");
		scanf("%d",&brancos);
		printf("Quantos votos nulos teve essa eleição? ");
		scanf("%d",&nulos);
		for(i = 0; i < candidatos; i++){
			printf("Escreva o primeiro nome de cada candidato: ");
			scanf("%s",&nome);
			printf("Escreva quantos votos esse candidato teve: ");
			scanf("%d",&votos);
			validos = votos + brancos;
			total = votos + brancos + nulos;
			float porcentagem = votos / total *100;
			if(porcentagem >= 50){
			printf("%s é o %d° candidato e como tem mais de 50%% (%.2f) dos é eleito no primeiro turno\n\n",nome, i + 1,porcentagem);
		}	
			else{
				printf("%s é o %d° candidato e tem %.2f%% dos votos\n\n", nome, i + 1, porcentagem);
			}
		}
	
	
		
		
		printf("Deseja continuar usando o programa? Escreva 1 para continuar e 0 para sair");
		scanf("%d",&continuar);
		
	}while(continuar == 1);
		
		return 0;
		
	}
