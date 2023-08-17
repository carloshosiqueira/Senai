#include <stdio.h>
int main(){
	unsigned int x = 0x76543210;
	char *c = (char*) &x;
	
	printf("*c is: 0x%x\n",*c);
	if (*c == 0x10) 
	{
		printf("A arquitetura do computador e little endian.\n");
	}
	else
	{ 
		printf("A arquitetura do computador e big endian\n");
	}
	return 0;
}
