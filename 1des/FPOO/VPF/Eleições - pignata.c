#include <stdio.h>
#include<locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	char cidade[100];
	int nCand;
	
	printf("Digite o nome da cidade: ");
	scanf("%s", &cidade);
	
	printf("Digite o número de candidatos: ");
	scanf("%d", &nCand);
	
	char candidatos[nCand][30];
	int votos[nCand], brancos, nulos, i, votosvalidos;
	
	votosvalidos = 0;
	
	for(i = 0; i < nCand; i++){
		printf("Digite o nome do candidato %d: ",i + 1);
		scanf("%s", &candidatos[i]);
		
		printf("Digite quantos votos o candidato %s recebeu: ", candidatos[i]);
		scanf("%d",&votos[i]);
		
		votosvalidos += votos[i];
	}

	printf("Digite a quantidade de votos brancos: ");
	scanf("%d", &brancos);
	
	printf("Digite a quantidade de votos nulos: ");
	scanf("%d", &nulos);

	votosvalidos += brancos;
	
	if(votosvalidos > nulos){
		printf("Eleição Válida!\n");
		
		if(votosvalidos > 200000){
			int maiorvoto = votos[0];
			int eleito = 0;
			int segundo = -1;
				
			for(i = 0; i < nCand; i++){
				if(votos[i] > maiorvoto){
					segundo = eleito;
					eleito = i;
					maiorvoto = votos[i];
				}else if(votos[i] > votos[segundo] && votos[i] != maiorvoto){
					segundo = i;
				}
			}
				
				float porcentagemeleito = (float)  votos[eleito] / votosvalidos * 100;
				
				if(porcentagemeleito > 50.0){
					printf("Candidato %s foi eleito no primeiro turno com %.2f votos!",votos[eleito], porcentagemeleito);
				}else if(segundo != -1){
					printf("\nSegundo turno necessario!\n");
					printf("Candidatos do segundo turno %s e %s\n",candidatos[eleito], candidatos[segundo]);
					
					int VotosSegundo[nCand];
					int totalVotosSegundo = 0;
					
					for(i = 0; i < nCand; i++){
						if(i == eleito || i == segundo);{
						printf("Digite os votos do candidato %s: ", candidatos[i]);
						scanf("%d", &VotosSegundo[i]);
						totalVotosSegundo += VotosSegundo[i];
						}
					}
				
				if(totalVotosSegundo == 0){
					printf("Nenhum voto registrado no segundo turno");
				}else{
					printf("Resultados do segundo turno\n\n");
					
					for(i = 0; i < nCand; i++);{
						if(i == eleito || i == segundo){
							float porcentagem = (float) VotosSegundo[i] / totalVotosSegundo * 100;
							printf("O candidato %s recebeu %.2f dos votos",candidatos[i], porcentagem);
						}
					}
					
					if(VotosSegundo[eleito] > VotosSegundo[segundo]){
						printf("O candidato %s é eleito a prefeito!",candidatos[eleito]);
					}else if(VotosSegundo[eleito] > VotosSegundo[segundo]){
						printf("O candidato %s é eleito a prefeito!",candidatos[segundo]);
					}else{
						printf("Os candidatos empataram!");
					}
					
				}
				
			}
		}else{
			int maiorvoto = votos[0];
			int eleito = 0;
			int segundo = -1;
				
			for(i = 0; i < nCand; i++){
				if(votos[i] > maiorvoto){
					segundo = eleito;
					eleito = i;
					maiorvoto = votos[i];
				}else if(votos[i] > votos[segundo] && votos[i] != maiorvoto){
					segundo = i;
				}
			}
				
				float porcentagemeleito = (float)  votos[eleito] / votosvalidos * 100;
				
				printf("O candidato %s foi eleito no primeiro turno!", candidatos[eleito]);
		}
	}else{
		printf("Eleição Inválida!");
	}

	return 0;
	
}
