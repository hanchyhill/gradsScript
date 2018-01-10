*==========================================================
*-------*--------*--------*-------*--------*------
* ����˵��:
*    grads2ascii V2.0�������ڰ�GrADS�����������������ASCII�ļ���
*    ��.txt, .csv��.
*--------------------*-------------------*-----------
* ʹ�÷�����
*   ��ʹ��ǰ�� grads2ascii.gs �ŵ�GrADS��װĿ¼:
*     1.9�汾��\GrADS19\libĿ¼�£�
*     2.0�汾��\OpenGrADS\Contents\Resources\ScriptsĿ¼�£�
*   ��ʹ�ô˺���ǰ����GrADS����Ҫת���������ļ���
*   ���÷���
*       grads2ascii expr filename n/a [format numl numb [u]]
*          expr         Ҫ��������ı�����
*          filename     ���������ASCII�ļ�·�����ļ���
*          n/a          ���ݴ浽�½�(n)���ļ���׷��(a)�����ļ�
*          format       ������ݵĸ�ʽ,��C��������,Ĭ����%g
*          numl         ÿ����¼(��)��������ݸ�����Ĭ����8
*          numb         ÿ�������ݼ����Ŀո���,Ĭ����1
*          u            ���'Undef'���������е�ȱʡֵ
*    �磺
*       'reinit '
*       'sdfopen H:\test\slp.2010.nc'
*       'grads2ascii slp H:\test\slp.txt n %8.0f 144 1'
*       'reinit'
*       ; 
*--------------------*--------------------*------------
* ���˼·��
*     grads2ascii ��Ҫʹ�õ���'set gxout print' ��������ASCII����
*   ���������,������ʱ����temp�洢����,����ʹ��write��������ʱ
*   ����д��ASCII�ļ�.����ʹ����
*            'set prnopts format numl numb <u>'
*   ���Ʊ�������ĸ�ʽ,�÷��ɲ���
* http://www.iges.org/grads/gadoc/gradcomdsetprnopts.html
*---------------------*--------------------*------------
*
*  DEC 05 2012 - add "n/a" args, HUANG Yongjie(IAP/CAS)
*  Nov 25 2011 - created, HUANG Yongjie(SYSU)
*
*-------*--------*---------*----------*----------*------
*==========================================================


function grads2ascii(args)

*=================
*    ��ȡ����
*=================
   expr     = subwrd(args,1)
   filename = subwrd(args,2)
   NorA     = subwrd(args,3)    
   format   = subwrd(args,4)
   numl     = subwrd(args,5)
   numb     = subwrd(args,6)
   u        = subwrd(args,7)


*=================================
*   ������Ϊ��ʱ��Ļ��������÷�
*=================================
   if(filename='')
       say ''
       say ' grads2ascii'
       say '  Output data to an ASCII file, usage:'
       say ''
       say '  grads2ascii expr filename n/a [format numl numb [u]]'
       say '    expr      Output variable name.'
       say '    filename  ASCII file path and name for output Variable.'
       say '    n/a       A new file(n) or add data to the end of an old file(a).'
       say '    format    A C language template for formatting ascii output. Default is %g.'
       say '    numl      Number of values to print per record. Default is 8.'
       say '    numb      Number of blanks to insert between values. Default is 1.'
       say '    u         Print 'Undef' instead of the numerical value for missing data.'
       say ''
       say ' grads2ascii version "2.0" of DEC 04 2012 00:55:00 $'
       say '   Copyright (c) HUANG Yongjie (IAP/CAS) ^_^'
       say ''
     return 
   endif 


*===================================
*  ʹ����ʱ����temp�洢Ҫ���������
*===================================
  'set gxout print'

*--�����ݸ�ʽ������Ϊ��������������ݸ�ʽ
   if(format != '')
      'set prnopts 'format' 'numl' 'numb' 'u''
   endif 

*---�洢�������---
  'd  ' expr
   if (rc !=0); return -1; endif 
   temp = result 


*==========================================================
*   ʹ�� sublin ��ȡÿһ�У���ʹ�� write д��ASCII�ļ���
*==========================================================

*--------------------------------------------------------
*   ��һ��Ϊ��Printing Grid -- XXX Values -- Undef = XXX
*   ����XXX��ʾ��ֵ��һ�㲻������д���ļ���
*--------------------------------------------------------
   i = 1; line = sublin(temp,i)
   num = subwrd(line,4)
   undef = subwrd(line,9)

*--�ӵڶ��п�ʼ������д��ASCII�ļ���--

   say ' ------------------------------------------- '
   if(NorA='a')
       say ' Data will append to 'filename'!'
   else
       say ' Data will cover the file: 'filename'!'  
   endif
   say ' ------------------------------------------- '
   
   i = 2; line = sublin(temp,i)
   while(line !='')
       if(NorA='a')
           rc = write(filename,line,append)
       else
           rc = write(filename,line)
       endif
       if (subwrd(rc,1) !=0); return -2; endif 
       i = i + 1
       line = sublin(temp,i)
   endwhile 

*-----�ر��ļ�------
   res = close(filename)
   if(res != 0); return -3; endif 

   say ' 'num' Values have been written to 'filename'!'
   say ' Thanks to LanXi ! ^_^'
   say ' ------------------------------------------- '
return 
