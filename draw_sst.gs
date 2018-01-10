'reinit'
'sdfopen F:\reanalysis\other\COBE_SST2\sst.mon.mean.nc'
'sdfopen F:\reanalysis\other\COBE_SST2\sst.mon.ltm.1981-2010.nc'
'enable print F:\reanalysis\other\COBE_SST2\sst.2011.ano.gmf'
'set lon 60 170'
'set lat -10 30'

k=0
while(k<3)
 'set dfile 1'
'set t 'k+1940
'raw=sst.1'

'set dfile 2'
'set t 'k+8
'set gxout shaded'
'set cmin 0'
'd raw-sst.2'
'cbarn'
'set gxout contour'
'd raw-sst.2'
'draw title sst ano 2011 'k+8
'print'
'c'
k=k+1
endwhile
'disable print'
;