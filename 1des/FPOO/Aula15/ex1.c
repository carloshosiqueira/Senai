#include<stdio.h>
#include <stdlib.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	
	FILE *entrada;
	char str[30];
	char data[10];
	char *nome;
	int idade, id;
	char linha[1000];
//	
//	entrada = fopen("entrada.csv","r");
//	if(entrada == NULL)
//		printf("Erro ao abrir o arquivo");
//	else{
//		while(fgets(linha, 1000, entrada)!= NULL){
//			id = atoi(strtok(linha,";"));
//			nome = strtok(NULL,";");
//			data = strtok(NULL,";");
//			printf("%d %s %d",id, nome, data);
//			
//		}
//		
//	}	
//	fclose (entrada);
//}
//
    entrada = fopen("entrada.csv", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir o arquivo");
    } else {
        while (fgets(linha, 1000, entrada) != NULL) {
            int id = atoi(strtok(linha, ";"));
            char *nome = strtok(NULL, ";");
            int data = atoi(strtok(NULL, ";"));
            
            printf("%d %s %d\n", id, nome, data);
        }
        fclose(entrada);
    }

    return 0;
}

