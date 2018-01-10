'reinit'
'sdfopen F:\reanalysis\reanalysis_2\uwnd.2011.nc'
'sdfopen F:\reanalysis\reanalysis_2\vwnd.2011.nc'
'sdfopen F:\reanalysis\other\olr.day.mean.nc'
'sdfopen F:\reanalysis\other\olr.day.ltm.nc'
*'set dfile 1'
*182/213/244/274/305/335
mon = Oct
inti = 274
days = 31
'set t 'inti
*
'enable print F:\reanalysis\img\raw\wind850_olr.ano_'mon'.special.gmf'
k=0
while(k<days)
'set lon 60 140'
'set lat -0 40'
'set lev 0'
'define dayolr = olr.3'
'set dfile 4'
'set gxout shaded'
'set cmax 0'
'set cint 10'
'set t 'inti+k
'd dayolr-olr.4'
'run cbar.gs'
'set dfile 1'
'set t 'inti+k
'set z 3'
'd uwnd;vwnd.2'
'draw title wind850&olr.ano 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;

