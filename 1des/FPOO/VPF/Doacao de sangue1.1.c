#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int i, doadores, continuar;
	
	do{
		printf("Quantos doadores tiveram no dia? ");
		scanf("%d",&doadores);
		char nome[doadores][30];
		int idade[doadores], dias[doadores], sexo[doadores];
		
		for(i = 0; i < doadores; i++){
			printf("Qual o nome do %d° doador? ", i + 1);
			scanf("%s", &nome[i]);
			printf("Qual o sexo? Masculino(1) ou Feminino(2): ");
			scanf("%d",&sexo[i]);
			printf("Quantos anos tem? ");
			scanf("%d",&idade[i]);
			printf("Quanto tempo faz desde a última doação de sangue em dias? ");
			scanf("%d",&dias[i]);
		}
		for(i = 0; i < doadores; i++){
			char genero;
			switch(sexo[i]){
				case 1:
					genero = 'M';
				break;
				case 2:
					genero = 'F';
				break;
				default:
					printf("Escreva 1 ou 2 para o sexo por favor\n");
					continue;
				}
					
				if(genero == 'M'){
				
					if(idade[i] < 16 || idade[i] > 69 || dias[i] < 60){
						printf("\nInformações\n");
						printf("Nome: %s\nIdade: %d\nSexo: %c\nDias desde a última doação: %d\n",nome[i], idade[i], genero, dias[i]);
						printf("INAPTO!!\n");
					}
					else{
						printf("\nInformações\n");
						printf("Nome: %s\nIdade: %d\nSexo: %c\nDias desde a última doação: %d\n",nome[i], idade[i], genero, dias[i]);
						printf("APTO!!\n");
					}
				}
				if(genero == 'F'){
					
					if(idade[i] < 16 || idade[i] > 69 || dias[i] < 90){
						printf("\nInformações\n");
						printf("Nome: %s\nIdade: %d\nSexo: %c\nDias desde a última doação: %d\n",nome[i], idade[i], genero, dias[i]);
						printf("INAPTA!!\n");
					}
					else{
						printf("\nInformações\n");
						printf("Nome: %s\nIdade: %d\nSexo: %c\nDias desde a última doação: %d\n",nome[i], idade[i], genero, dias[i]);
						printf("APTA!!\n");
					}
				}
	
		}
		

	
	printf("\nDeseja prosseguir com a próxima lista? Digite 1 para continuar e 0 para sair\n");
	scanf("%d",&continuar);
	
}while(continuar == 1);

	return 0;
}

