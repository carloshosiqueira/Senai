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
					printf("Sexo inválido, não foi possivel determinar ser é apto ou inapto\n");
					continue ;
				}
					
				if(genero == 'M'){
				
					if(idade[i] < 16 || idade[i] > 69 || dias[i] < 60){
						printf("Nome\tStatus\n");
						printf("%s\tINAPTO\n", nome[i]);
					}
					else{
						printf("Nome\tStatus\n");
						printf("%s\tAPTO\n", nome[i]);
					}
				}
				if(genero == 'F'){
					
					if(idade[i] < 16 || idade[i] > 69 || dias[i] < 90){
						printf("Nome\tStatus\n");
						printf("%s\tINAPTA\n", nome[i]);
					}
					else{
						printf("Nome\tStatus\n");
						printf("%s\tAPTA\n", nome[i]);
					}
				}
	
		}
		

	
	printf("\nDeseja prosseguir com a próxima lista? Digite 1 para continuar e 0 para sair\n");
	scanf("%d",&continuar);
	
}while(continuar == 1);

	return 0;
}

