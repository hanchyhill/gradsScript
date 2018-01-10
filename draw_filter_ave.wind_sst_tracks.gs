*set t 1131 8-28
*set t 1138 10-16
*'define a1=maskout(anal,mask.2)'
'reinit'
'sdfopen F:\reanalysis\other\noaa.oisst\sst.wkmean.1990-present.nc'
'sdfopen F:\reanalysis\other\noaa.oisst\sst.ltm.1971-2000.nc'
'open F:\reanalysis\output_3\uwund(850hPa).filter(MT10)_0-360.ctl'
'open F:\reanalysis\output_3\vwund(850hPa).filter(MT10)_0-360.ctl'

*'set dfile 1'
*182/213/244/274/305/335
'set lon 60 170'
'set lat -10 40'

'set rgb 33 252 75 45'
'set rgb 34 253 118 52'
'set rgb 35 252 154 38'
'set rgb 36 248 205 89'
'set rgb 37 250 235 110'
'set rgb 38 238 251 132'
'set rgb 39 241 239 205'
'set t ' 1
*
'enable print F:\reanalysis\output_3\ave.sst.wind_track_09_10.V3.gmf'

*'set gxout shaded'
*'set cmin 0'
*'d ave(sst.1,t=1131,t=1137)'
*'run cbar'
*'print'
*'c'

'raw=ave(sst.1,t=1131,t=1137)'

'set dfile 2'
'set grads off'
'set xlopts 1 6 0.25'
'set ylopts 1 6 0.25'
'set xlint 20'
'set ylint 10'
'set t 9'
'set gxout shaded'
*'set cmin -0.1'
'set cmin 0'
'set clevs 0 0.2 0.4 0.6 0.8 1.0'
'set ccols 0 38 37 36 35 34 33'
'ltm=sst.2(t=9)*0.7+sst.2(t=10)*0.3'

'd raw-ltm'
'cbarn'

*wind
'set dfile 3'
'set lon 60 170'
'set lat -10 40'

mon = Oct
inti = 274
days = 31
'set t ' 1
'set z ' 1
'set xlopts 1 6 0.25'
'set ylopts 1 6 0.25'
'set xlint 20'
'set ylint 10'
'd ave(uwnd.3,t=244,t=289);ave(vwnd.4,t=244,t=289)'



*track
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
