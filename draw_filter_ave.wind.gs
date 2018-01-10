'reinit'
'open F:\reanalysis\output_3\uwund(850hPa).filter(MT10)_0-360.ctl'
'open F:\reanalysis\output_3\vwund(850hPa).filter(MT10)_0-360.ctl'

*'set dfile 1'
*182/213/244/274/305/335
'set lon 60 170'
'set lat -10 40'

mon = Oct
inti = 274
days = 31
'set t ' 1
*
'enable print F:\reanalysis\output_3\avewind.09_10.V3.gmf'

'd ave(uwnd,t=244,t=289);ave(vwnd.2,t=244,t=289)'

*'c'

read_file=read('F:\reanalysis\script\track.txt')
read_line=sublin(read_file,2)
lat0=subwrd(read_line,1) 
lon0=subwrd(read_line,2)
'q w2xy ' lon0 ' ' lat0 
x0=subwrd(result,3) 
y0=subwrd(result,6) 
xbefore=x0
ybefore=y0



i=1
while(i<290)
read_file=read('F:\reanalysis\script\track.txt')
read_line=sublin(read_file,2)

if(strlen(read_line)>3)
    lat0=subwrd(read_line,1) 
    lon0=subwrd(read_line,2)

    'q w2xy ' lon0 ' ' lat0 
    x0=subwrd(result,3) 
    y0=subwrd(result,6) 

*say xbefore
*say ybefore
*say x0
*say y0
*pull dummy
'draw mark 3 'x0' 'y0' 0.06'
'set line 9 1 6'
    'draw line 'xbefore' 'ybefore' 'x0' 'y0'' 
    xbefore=x0
    ybefore=y0

    i=i+1
else
    read_file=read('F:\reanalysis\script\track.txt')
    read_line=sublin(read_file,2)
    lat0=subwrd(read_line,1) 
    lon0=subwrd(read_line,2)
    'q w2xy ' lon0 ' ' lat0 
    x0=subwrd(result,3) 
    y0=subwrd(result,6) 
    xbefore=x0
    ybefore=y0
    say i
    i=i+2
endif
endwhile
'draw title wind850(period>10)& tropical cyclone tracks'
'print'
'disable print'
;
*strlen  read_file=read('weizhi-r.txt') 
