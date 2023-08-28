#include <stdio.h>
#include <locale.h>
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
	
	
	
//Tentativa chat GPT pra ter uma ideia (DEPOIS DE EU TER TENTANDO FAZER O MEU)
//#include <stdio.h>
//#include <locale.h>
//int main(){
//	setlocale(LC_ALL,"");
//	char cidade[50];
//	float numcandidatos;
//	int i, continuar;
//	
//	do{
//		
//		printf("Escreva o nome da cidade: ");
//		scanf("%s",&cidade);
//		printf("Escreva a quantidade de candidatos a prefeito: ");
//		scanf("%d",&numcandidatos);
//		
//		char candidatos[numcandidatos];
//		int votos[numcandidatos];
//		int votosbrancos, votosnulos;
//		
//		for(i = 0; i < numcandidatos; i++){
//			printf("Escreva o nome do %d° candidato",i + 1);
//			scanf("%s",&candidatos[i]);
//			printf("Digite o total de votos para %s",candidatos[i]);
//			scanf("%d",&votos[i]);
//		}
//		
//		printf("Escreva a quantidade de votos brancos: ");
//		scanf("%d",&votosbrancos);
//		printf("Escreva a quantidade de votos nulos: ");
//		scanf("%d",votosnulos);
//		
//		int votosvalidos;
//		
//		for(i = 0; i < numcandidatos; i++){
//			votosvalidos += votosbrancos;
//		}
//		
//		int votosinvalidos = votosnulos;
//		
//		if(votosvalidos > votosinvalidos){
//			float porcentagem[numcandidatos];
//			for(i = 0; i < numcandidatos; i++){
//				porcentagem[i] = votos[i] / votosvalidos * 100;
//				printf("O candidato %s tem uma quantidade equivalente a %d%% dos votos",candidatos[i], porcentagem[i]);
//				if(porcentagem > 50){
//					printf("O candidato %s foi eleito no primeiro turno!\n",candidatos[i]);
//					return 0;
//				}
//			}
//			
//			if(votosvalidos > 200000){
//				printf("Terá um segundo turno entre os candidatos mais votados\n");
//			}
//		}
//		else{
//			printf("A eleição foi inválida pois há menos votos válidos do que votos");
//		}
//		
