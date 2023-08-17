#include <stdio.h>
int main(){
	int a, b, c, d, e, f;
	printf("Insira os 6 numeros inteiros a,b,c,d,e,f respectivamente:\n");
	scanf("%d",&a);
	scanf("%d",&b);
	scanf("%d",&c);
	scanf("%d",&d);
	scanf("%d",&e);
	scanf("%d",&f);
	if(a >= b && a >= c && a >= d && a>=e && a >= f)
		printf("O maior valor e %d",a);
	else if (b >= a && b >= c && b >= d && b>=e && b >= f) printf("O maior valor e %d",b);
	else if (c >= a && c >= b && c >= d && c>=e && c >= f) printf("O maior valor e %d",c);
	else if (d >= a && d >= c && d >= c && d>=e && d >= f) printf("O maior valor e %d",d);
	else if (e >= a && e >= b && e >= c && e>=d && e >= f) printf("O maior valor e %d",e);
	else if (f >= a && f >= b && f >= c && f>=d && f >= e) printf("O maior valor e %d",f);
	return 0;
}
