#include<stdio.h>
#include <stdlib.h>
#include<locale.h>
#include <time.h>
int main(){
	setlocale(LC_ALL,"");
	
	struct tm {
int tm_sec; //representa os segundos de 0 a 59
int tm_min; //representa os minutos de 0 a 59
int tm_hour; //representa as horas de 0 a 24
int tm_mday; //dia do mês de 1 a 31
int tm_mon; //representa os meses do ano de 0 a 11
int tm_year; //representa o ano a partir de 1900
int tm_wday; //dia da semana de 0 (domingo) até 6 (sábado)
int tm_yday; // dia do ano de 1 a 365
int tm_isdst; //indica horário de verão se for diferente de zero
};
	
	
	FILE *entrada;
	char str[30];
	char *nome;
	int idade, id;
	char linha[1000];	

    entrada = fopen("entrada.csv", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir o arquivo");
    } else {
        while (fgets(linha, 1000, entrada) != NULL) {
            int id = atoi(strtok(linha, ";"));
            char *nome = strtok(NULL, ";");
            int ano = atoi(strtok(NULL, "-"));
            int mes = atoi(strtok(NULL, "-"));
            int dia = atoi(strtok(NULL, " "));
            
            printf("%d %s %d %d %d\n", id, nome, ano, mes, dia);
        }
        fclose(entrada);
        
        
        
    }

    return 0;
}
