import { Column, Entity } from 'typeorm';

@Entity('common_usergroup_field')
export class PreCommonUsergroupField {
  @Column('smallint', { primary: true, name: 'groupid', unsigned: true })
  groupid: number;

  @Column('tinyint', {
    name: 'readaccess',
    unsigned: true,
    default: () => "'0'",
  })
  readaccess: number;

  @Column('tinyint', { name: 'allowpost', width: 1, default: () => "'0'" })
  allowpost: boolean;

  @Column('tinyint', { name: 'allowreply', width: 1, default: () => "'0'" })
  allowreply: boolean;

  @Column('tinyint', { name: 'allowpostpoll', width: 1, default: () => "'0'" })
  allowpostpoll: boolean;

  @Column('tinyint', {
    name: 'allowpostreward',
    width: 1,
    default: () => "'0'",
  })
  allowpostreward: boolean;

  @Column('tinyint', { name: 'allowposttrade', width: 1, default: () => "'0'" })
  allowposttrade: boolean;

  @Column('tinyint', {
    name: 'allowpostactivity',
    width: 1,
    default: () => "'0'",
  })
  allowpostactivity: boolean;

  @Column('tinyint', {
    name: 'allowdirectpost',
    width: 1,
    default: () => "'0'",
  })
  allowdirectpost: boolean;

  @Column('tinyint', { name: 'allowgetattach', width: 1, default: () => "'0'" })
  allowgetattach: boolean;

  @Column('tinyint', {
    name: 'allowpostattach',
    width: 1,
    default: () => "'0'",
  })
  allowpostattach: boolean;

  @Column('tinyint', { name: 'allowpostimage', width: 1, default: () => "'0'" })
  allowpostimage: boolean;

  @Column('tinyint', { name: 'allowvote', width: 1, default: () => "'0'" })
  allowvote: boolean;

  @Column('tinyint', {
    name: 'allowmultigroups',
    width: 1,
    default: () => "'0'",
  })
  allowmultigroups: boolean;

  @Column('tinyint', { name: 'allowsearch', width: 1, default: () => "'0'" })
  allowsearch: boolean;

  @Column('tinyint', { name: 'allowcstatus', width: 1, default: () => "'0'" })
  allowcstatus: boolean;

  @Column('tinyint', { name: 'allowinvisible', width: 1, default: () => "'0'" })
  allowinvisible: boolean;

  @Column('tinyint', { name: 'allowtransfer', width: 1, default: () => "'0'" })
  allowtransfer: boolean;

  @Column('tinyint', {
    name: 'allowsetreadperm',
    width: 1,
    default: () => "'0'",
  })
  allowsetreadperm: boolean;

  @Column('tinyint', {
    name: 'allowsetattachperm',
    width: 1,
    default: () => "'0'",
  })
  allowsetattachperm: boolean;

  @Column('tinyint', { name: 'allowhidecode', width: 1, default: () => "'0'" })
  allowhidecode: boolean;

  @Column('tinyint', { name: 'allowhtml', width: 1, default: () => "'0'" })
  allowhtml: boolean;

  @Column('tinyint', { name: 'allowcusbbcode', width: 1, default: () => "'0'" })
  allowcusbbcode: boolean;

  @Column('tinyint', { name: 'allowanonymous', width: 1, default: () => "'0'" })
  allowanonymous: boolean;

  @Column('tinyint', { name: 'allowsigbbcode', width: 1, default: () => "'0'" })
  allowsigbbcode: boolean;

  @Column('tinyint', {
    name: 'allowsigimgcode',
    width: 1,
    default: () => "'0'",
  })
  allowsigimgcode: boolean;

  @Column('tinyint', { name: 'allowmagics', unsigned: true })
  allowmagics: number;

  @Column('tinyint', {
    name: 'disableperiodctrl',
    width: 1,
    default: () => "'0'",
  })
  disableperiodctrl: boolean;

  @Column('tinyint', { name: 'reasonpm', width: 1, default: () => "'0'" })
  reasonpm: boolean;

  @Column('smallint', {
    name: 'maxprice',
    unsigned: true,
    default: () => "'0'",
  })
  maxprice: number;

  @Column('smallint', {
    name: 'maxsigsize',
    unsigned: true,
    default: () => "'0'",
  })
  maxsigsize: number;

  @Column('int', {
    name: 'maxattachsize',
    unsigned: true,
    default: () => "'0'",
  })
  maxattachsize: number;

  @Column('int', {
    name: 'maxsizeperday',
    unsigned: true,
    default: () => "'0'",
  })
  maxsizeperday: number;

  @Column('tinyint', {
    name: 'maxthreadsperhour',
    unsigned: true,
    default: () => "'0'",
  })
  maxthreadsperhour: number;

  @Column('tinyint', {
    name: 'maxpostsperhour',
    unsigned: true,
    default: () => "'0'",
  })
  maxpostsperhour: number;

  @Column('char', { name: 'attachextensions', length: 100 })
  attachextensions: string;

  @Column('char', { name: 'raterange', length: 150 })
  raterange: string;

  @Column('char', { name: 'loginreward', length: 150 })
  loginreward: string;

  @Column('smallint', {
    name: 'mintradeprice',
    unsigned: true,
    default: () => "'1'",
  })
  mintradeprice: number;

  @Column('smallint', {
    name: 'maxtradeprice',
    unsigned: true,
    default: () => "'0'",
  })
  maxtradeprice: number;

  @Column('smallint', {
    name: 'minrewardprice',
    unsigned: true,
    default: () => "'1'",
  })
  minrewardprice: number;

  @Column('smallint', {
    name: 'maxrewardprice',
    unsigned: true,
    default: () => "'0'",
  })
  maxrewardprice: number;

  @Column('tinyint', { name: 'magicsdiscount', width: 1 })
  magicsdiscount: boolean;

  @Column('smallint', { name: 'maxmagicsweight', unsigned: true })
  maxmagicsweight: number;

  @Column('tinyint', {
    name: 'allowpostdebate',
    width: 1,
    default: () => "'0'",
  })
  allowpostdebate: boolean;

  @Column('tinyint', { name: 'tradestick', unsigned: true })
  tradestick: number;

  @Column('tinyint', { name: 'exempt', unsigned: true })
  exempt: number;

  @Column('smallint', { name: 'maxattachnum', default: () => "'0'" })
  maxattachnum: number;

  @Column('tinyint', { name: 'allowposturl', width: 1, default: () => "'3'" })
  allowposturl: boolean;

  @Column('tinyint', {
    name: 'allowrecommend',
    unsigned: true,
    default: () => "'1'",
  })
  allowrecommend: number;

  @Column('tinyint', {
    name: 'allowpostrushreply',
    width: 1,
    default: () => "'0'",
  })
  allowpostrushreply: boolean;

  @Column('smallint', {
    name: 'maxfriendnum',
    unsigned: true,
    default: () => "'0'",
  })
  maxfriendnum: number;

  @Column('int', { name: 'maxspacesize', unsigned: true, default: () => "'0'" })
  maxspacesize: number;

  @Column('tinyint', { name: 'allowcomment', width: 1, default: () => "'0'" })
  allowcomment: boolean;

  @Column('tinyint', {
    name: 'allowcommentmod',
    width: 1,
    default: () => "'0'",
  })
  allowcommentmod: boolean;

  @Column('smallint', {
    name: 'searchinterval',
    unsigned: true,
    default: () => "'0'",
  })
  searchinterval: number;

  @Column('tinyint', { name: 'searchignore', width: 1, default: () => "'0'" })
  searchignore: boolean;

  @Column('tinyint', { name: 'allowblog', width: 1, default: () => "'0'" })
  allowblog: boolean;

  @Column('tinyint', { name: 'allowdoing', width: 1, default: () => "'0'" })
  allowdoing: boolean;

  @Column('tinyint', { name: 'allowupload', width: 1, default: () => "'0'" })
  allowupload: boolean;

  @Column('tinyint', { name: 'allowshare', width: 1, default: () => "'0'" })
  allowshare: boolean;

  @Column('tinyint', { name: 'allowcss', width: 1, default: () => "'0'" })
  allowcss: boolean;

  @Column('tinyint', { name: 'allowpoke', width: 1, default: () => "'0'" })
  allowpoke: boolean;

  @Column('tinyint', { name: 'allowfriend', width: 1, default: () => "'0'" })
  allowfriend: boolean;

  @Column('tinyint', { name: 'allowclick', width: 1, default: () => "'0'" })
  allowclick: boolean;

  @Column('tinyint', { name: 'allowmagic', width: 1, default: () => "'0'" })
  allowmagic: boolean;

  @Column('tinyint', { name: 'allowstat', width: 1, default: () => "'0'" })
  allowstat: boolean;

  @Column('tinyint', {
    name: 'videophotoignore',
    width: 1,
    default: () => "'0'",
  })
  videophotoignore: boolean;

  @Column('tinyint', {
    name: 'allowviewvideophoto',
    width: 1,
    default: () => "'0'",
  })
  allowviewvideophoto: boolean;

  @Column('tinyint', { name: 'allowmyop', width: 1, default: () => "'0'" })
  allowmyop: boolean;

  @Column('tinyint', { name: 'magicdiscount', width: 1, default: () => "'0'" })
  magicdiscount: boolean;

  @Column('smallint', {
    name: 'domainlength',
    unsigned: true,
    default: () => "'0'",
  })
  domainlength: number;

  @Column('tinyint', { name: 'seccode', width: 1, default: () => "'1'" })
  seccode: boolean;

  @Column('tinyint', {
    name: 'disablepostctrl',
    width: 1,
    default: () => "'0'",
  })
  disablepostctrl: boolean;

  @Column('tinyint', {
    name: 'allowbuildgroup',
    unsigned: true,
    default: () => "'0'",
  })
  allowbuildgroup: number;

  @Column('int', {
    name: 'edittimelimit',
    unsigned: true,
    default: () => "'0'",
  })
  edittimelimit: number;

  @Column('tinyint', {
    name: 'allowpostarticle',
    width: 1,
    default: () => "'0'",
  })
  allowpostarticle: boolean;

  @Column('tinyint', {
    name: 'allowspacediyhtml',
    width: 1,
    default: () => "'0'",
  })
  allowspacediyhtml: boolean;

  @Column('tinyint', {
    name: 'allowspacediybbcode',
    width: 1,
    default: () => "'0'",
  })
  allowspacediybbcode: boolean;

  @Column('tinyint', {
    name: 'allowspacediyimgcode',
    width: 1,
    default: () => "'0'",
  })
  allowspacediyimgcode: boolean;

  @Column('tinyint', {
    name: 'allowcommentpost',
    width: 1,
    default: () => "'2'",
  })
  allowcommentpost: boolean;

  @Column('tinyint', {
    name: 'allowcommentitem',
    width: 1,
    default: () => "'0'",
  })
  allowcommentitem: boolean;

  @Column('smallint', { name: 'allowcommentarticle', default: () => "'0'" })
  allowcommentarticle: number;

  @Column('tinyint', {
    name: 'allowcommentarticlemod',
    width: 1,
    default: () => "'0'",
  })
  allowcommentarticlemod: boolean;

  @Column('tinyint', { name: 'allowblogmod', width: 1, default: () => "'0'" })
  allowblogmod: boolean;

  @Column('tinyint', { name: 'allowdoingmod', width: 1, default: () => "'0'" })
  allowdoingmod: boolean;

  @Column('tinyint', { name: 'allowuploadmod', width: 1, default: () => "'0'" })
  allowuploadmod: boolean;

  @Column('tinyint', { name: 'allowsharemod', width: 1, default: () => "'0'" })
  allowsharemod: boolean;

  @Column('tinyint', { name: 'allowstatdata', width: 1, default: () => "'0'" })
  allowstatdata: boolean;

  @Column('tinyint', {
    name: 'allowgroupdirectpost',
    unsigned: true,
    default: () => "'0'",
  })
  allowgroupdirectpost: number;

  @Column('tinyint', {
    name: 'allowgroupposturl',
    unsigned: true,
    default: () => "'0'",
  })
  allowgroupposturl: number;

  @Column('tinyint', {
    name: 'allowdownlocalimg',
    width: 1,
    default: () => "'0'",
  })
  allowdownlocalimg: boolean;

  @Column('tinyint', {
    name: 'allowpostarticlemod',
    width: 1,
    default: () => "'0'",
  })
  allowpostarticlemod: boolean;

  @Column('tinyint', { name: 'ignorecensor', width: 1, default: () => "'0'" })
  ignorecensor: boolean;

  @Column('tinyint', { name: 'allowgetimage', width: 1, default: () => "'0'" })
  allowgetimage: boolean;

  @Column('tinyint', { name: 'allowposttag', width: 1, default: () => "'0'" })
  allowposttag: boolean;

  @Column('tinyint', {
    name: 'allowdownremoteimg',
    width: 1,
    default: () => "'0'",
  })
  allowdownremoteimg: boolean;

  @Column('tinyint', {
    name: 'allowcommentreply',
    width: 1,
    default: () => "'0'",
  })
  allowcommentreply: boolean;

  @Column('tinyint', {
    name: 'allowreplycredit',
    width: 1,
    default: () => "'0'",
  })
  allowreplycredit: boolean;

  @Column('tinyint', { name: 'allowsendallpm', width: 1, default: () => "'0'" })
  allowsendallpm: boolean;

  @Column('smallint', {
    name: 'allowsendpmmaxnum',
    unsigned: true,
    default: () => "'0'",
  })
  allowsendpmmaxnum: number;

  @Column('mediumint', {
    name: 'maximagesize',
    unsigned: true,
    default: () => "'0'",
  })
  maximagesize: number;

  @Column('tinyint', { name: 'allowmediacode', width: 1, default: () => "'0'" })
  allowmediacode: boolean;

  @Column('tinyint', { name: 'allowbegincode', width: 1, default: () => "'0'" })
  allowbegincode: boolean;

  @Column('smallint', { name: 'allowat', unsigned: true, default: () => "'0'" })
  allowat: number;

  @Column('tinyint', { name: 'allowsave', width: 1, default: () => "'1'" })
  allowsave: boolean;

  @Column('tinyint', { name: 'allowsavereply', width: 1, default: () => "'1'" })
  allowsavereply: boolean;

  @Column('int', { name: 'allowsavenum', unsigned: true, default: () => "'0'" })
  allowsavenum: number;

  @Column('tinyint', {
    name: 'allowsetpublishdate',
    width: 1,
    default: () => "'0'",
  })
  allowsetpublishdate: boolean;

  @Column('tinyint', {
    name: 'allowfollowcollection',
    unsigned: true,
    default: () => "'0'",
  })
  allowfollowcollection: number;

  @Column('tinyint', {
    name: 'allowcommentcollection',
    width: 1,
    default: () => "'0'",
  })
  allowcommentcollection: boolean;

  @Column('smallint', {
    name: 'allowcreatecollection',
    unsigned: true,
    default: () => "'0'",
  })
  allowcreatecollection: number;

  @Column('tinyint', { name: 'forcesecques', width: 1, default: () => "'0'" })
  forcesecques: boolean;

  @Column('tinyint', {
    name: 'forcelogin',
    unsigned: true,
    default: () => "'0'",
  })
  forcelogin: number;

  @Column('tinyint', { name: 'closead', width: 1, default: () => "'0'" })
  closead: boolean;

  @Column('smallint', {
    name: 'buildgroupcredits',
    unsigned: true,
    default: () => "'0'",
  })
  buildgroupcredits: number;

  @Column('tinyint', {
    name: 'allowimgcontent',
    width: 1,
    default: () => "'0'",
  })
  allowimgcontent: boolean;

  @Column('tinyint', {
    name: 'allowavatarupload',
    width: 1,
    default: () => "'0'",
  })
  allowavatarupload: boolean;

  @Column('tinyint', {
    name: 'allowviewprofile',
    width: 1,
    default: () => "'0'",
  })
  allowviewprofile: boolean;
}
