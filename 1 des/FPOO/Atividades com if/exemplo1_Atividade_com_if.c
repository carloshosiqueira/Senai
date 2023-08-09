#include <stdio.h>
/* Programa que avalia médias com critérios
"Aprovado" >= 50 E Frequêcia >= 75%
Porém receberá como entrada três notas,
total de aulas dadas e
total de presenças
*/
int main(){
	//Declaração de Variaveis
	float aulasd, aulasp;
	int nota1, nota2, nota3;
	//Entrada de Dados
	printf("Insira as notas do aluno de 0 a 100:\n");
	scanf("%d\n%d\n%d",&nota1,&nota2,&nota3);
	printf("Insira a quantidade de aulas dadas: ");
	scanf("%f",&aulasd);
	printf("Insira a quantidade de aulas em que o aluno estava presente: ");
	scanf("%f",&aulasp);
	//Processamento
	float media = (nota1 + nota2 + nota3) / 3;
	float frequencia = (aulasp / aulasd) *100;
	//saida com condicional
	printf("Com uma media de %.2f e uma frequencia de %.2f%% o aluno esta: ",media, frequencia);
	if(media >= 50 && frequencia >= 75)
		printf("Aprovado");
	else {
		if(media >= 50 && frequencia < 75)
		printf("Reprovado por faltas");
			else{
				if(media <50 && frequencia > 75)
				printf("Reprovado por nota");
			else
				printf("Reprovado por tudo");
			}
	}
	//Fim
	return 0;
}
