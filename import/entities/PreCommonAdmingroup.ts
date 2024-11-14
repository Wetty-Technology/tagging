import { Column, Entity } from 'typeorm';

@Entity('common_admingroup')
export class PreCommonAdmingroup {
  @Column('smallint', {
    primary: true,
    name: 'admingid',
    unsigned: true,
    default: () => "'0'",
  })
  admingid: number;

  @Column('tinyint', { name: 'alloweditpost', width: 1, default: () => "'0'" })
  alloweditpost: boolean;

  @Column('tinyint', { name: 'alloweditpoll', width: 1, default: () => "'0'" })
  alloweditpoll: boolean;

  @Column('tinyint', {
    name: 'allowstickthread',
    width: 1,
    default: () => "'0'",
  })
  allowstickthread: boolean;

  @Column('tinyint', { name: 'allowmodpost', width: 1, default: () => "'0'" })
  allowmodpost: boolean;

  @Column('tinyint', { name: 'allowdelpost', width: 1, default: () => "'0'" })
  allowdelpost: boolean;

  @Column('tinyint', { name: 'allowmassprune', width: 1, default: () => "'0'" })
  allowmassprune: boolean;

  @Column('tinyint', { name: 'allowrefund', width: 1, default: () => "'0'" })
  allowrefund: boolean;

  @Column('tinyint', {
    name: 'allowcensorword',
    width: 1,
    default: () => "'0'",
  })
  allowcensorword: boolean;

  @Column('tinyint', { name: 'allowviewip', width: 1, default: () => "'0'" })
  allowviewip: boolean;

  @Column('tinyint', { name: 'allowbanip', width: 1, default: () => "'0'" })
  allowbanip: boolean;

  @Column('tinyint', { name: 'allowedituser', width: 1, default: () => "'0'" })
  allowedituser: boolean;

  @Column('tinyint', { name: 'allowmoduser', width: 1, default: () => "'0'" })
  allowmoduser: boolean;

  @Column('tinyint', { name: 'allowbanuser', width: 1, default: () => "'0'" })
  allowbanuser: boolean;

  @Column('tinyint', {
    name: 'allowpostannounce',
    width: 1,
    default: () => "'0'",
  })
  allowpostannounce: boolean;

  @Column('tinyint', { name: 'allowviewlog', width: 1, default: () => "'0'" })
  allowviewlog: boolean;

  @Column('tinyint', { name: 'allowbanpost', width: 1, default: () => "'0'" })
  allowbanpost: boolean;

  @Column('tinyint', {
    name: 'supe_allowpushthread',
    width: 1,
    default: () => "'0'",
  })
  supeAllowpushthread: boolean;

  @Column('tinyint', {
    name: 'allowhighlightthread',
    width: 1,
    default: () => "'0'",
  })
  allowhighlightthread: boolean;

  @Column('tinyint', {
    name: 'allowlivethread',
    width: 1,
    default: () => "'0'",
  })
  allowlivethread: boolean;

  @Column('tinyint', {
    name: 'allowdigestthread',
    width: 1,
    default: () => "'0'",
  })
  allowdigestthread: boolean;

  @Column('tinyint', {
    name: 'allowrecommendthread',
    width: 1,
    default: () => "'0'",
  })
  allowrecommendthread: boolean;

  @Column('tinyint', {
    name: 'allowbumpthread',
    width: 1,
    default: () => "'0'",
  })
  allowbumpthread: boolean;

  @Column('tinyint', {
    name: 'allowclosethread',
    width: 1,
    default: () => "'0'",
  })
  allowclosethread: boolean;

  @Column('tinyint', {
    name: 'allowmovethread',
    width: 1,
    default: () => "'0'",
  })
  allowmovethread: boolean;

  @Column('tinyint', {
    name: 'allowedittypethread',
    width: 1,
    default: () => "'0'",
  })
  allowedittypethread: boolean;

  @Column('tinyint', {
    name: 'allowstampthread',
    width: 1,
    default: () => "'0'",
  })
  allowstampthread: boolean;

  @Column('tinyint', {
    name: 'allowcopythread',
    width: 1,
    default: () => "'0'",
  })
  allowcopythread: boolean;

  @Column('tinyint', {
    name: 'allowmergethread',
    width: 1,
    default: () => "'0'",
  })
  allowmergethread: boolean;

  @Column('tinyint', {
    name: 'allowsplitthread',
    width: 1,
    default: () => "'0'",
  })
  allowsplitthread: boolean;

  @Column('tinyint', {
    name: 'allowrepairthread',
    width: 1,
    default: () => "'0'",
  })
  allowrepairthread: boolean;

  @Column('tinyint', { name: 'allowwarnpost', width: 1, default: () => "'0'" })
  allowwarnpost: boolean;

  @Column('tinyint', {
    name: 'allowviewreport',
    width: 1,
    default: () => "'0'",
  })
  allowviewreport: boolean;

  @Column('tinyint', { name: 'alloweditforum', width: 1, default: () => "'0'" })
  alloweditforum: boolean;

  @Column('tinyint', {
    name: 'allowremovereward',
    width: 1,
    default: () => "'0'",
  })
  allowremovereward: boolean;

  @Column('tinyint', { name: 'allowedittrade', width: 1, default: () => "'0'" })
  allowedittrade: boolean;

  @Column('tinyint', {
    name: 'alloweditactivity',
    width: 1,
    default: () => "'0'",
  })
  alloweditactivity: boolean;

  @Column('tinyint', {
    name: 'allowstickreply',
    width: 1,
    default: () => "'0'",
  })
  allowstickreply: boolean;

  @Column('tinyint', {
    name: 'allowmanagearticle',
    width: 1,
    default: () => "'0'",
  })
  allowmanagearticle: boolean;

  @Column('tinyint', { name: 'allowaddtopic', width: 1, default: () => "'0'" })
  allowaddtopic: boolean;

  @Column('tinyint', {
    name: 'allowmanagetopic',
    width: 1,
    default: () => "'0'",
  })
  allowmanagetopic: boolean;

  @Column('tinyint', { name: 'allowdiy', width: 1, default: () => "'0'" })
  allowdiy: boolean;

  @Column('tinyint', { name: 'managefeed', width: 1, default: () => "'0'" })
  managefeed: boolean;

  @Column('tinyint', { name: 'managedoing', width: 1, default: () => "'0'" })
  managedoing: boolean;

  @Column('tinyint', { name: 'manageshare', width: 1, default: () => "'0'" })
  manageshare: boolean;

  @Column('tinyint', { name: 'manageblog', width: 1, default: () => "'0'" })
  manageblog: boolean;

  @Column('tinyint', { name: 'managealbum', width: 1, default: () => "'0'" })
  managealbum: boolean;

  @Column('tinyint', { name: 'managecomment', width: 1, default: () => "'0'" })
  managecomment: boolean;

  @Column('tinyint', { name: 'managemagiclog', width: 1, default: () => "'0'" })
  managemagiclog: boolean;

  @Column('tinyint', { name: 'managereport', width: 1, default: () => "'0'" })
  managereport: boolean;

  @Column('tinyint', { name: 'managehotuser', width: 1, default: () => "'0'" })
  managehotuser: boolean;

  @Column('tinyint', {
    name: 'managedefaultuser',
    width: 1,
    default: () => "'0'",
  })
  managedefaultuser: boolean;

  @Column('tinyint', {
    name: 'managevideophoto',
    width: 1,
    default: () => "'0'",
  })
  managevideophoto: boolean;

  @Column('tinyint', { name: 'managemagic', width: 1, default: () => "'0'" })
  managemagic: boolean;

  @Column('tinyint', { name: 'manageclick', width: 1, default: () => "'0'" })
  manageclick: boolean;

  @Column('tinyint', {
    name: 'allowmanagecollection',
    width: 1,
    default: () => "'0'",
  })
  allowmanagecollection: boolean;

  @Column('tinyint', { name: 'allowmakehtml', width: 1, default: () => "'0'" })
  allowmakehtml: boolean;

  @Column('tinyint', { name: 'allowstamplist', width: 1, default: () => "'0'" })
  allowstamplist: boolean;

  @Column('tinyint', {
    name: 'allowauthorizedarticle',
    width: 1,
    default: () => "'0'",
  })
  allowauthorizedarticle: boolean;

  @Column('tinyint', {
    name: 'allowauthorizedblock',
    width: 1,
    default: () => "'0'",
  })
  allowauthorizedblock: boolean;

  @Column('tinyint', {
    name: 'allowclearrecycle',
    width: 1,
    default: () => "'0'",
  })
  allowclearrecycle: boolean;

  @Column('tinyint', {
    name: 'allowbanvisituser',
    width: 1,
    default: () => "'0'",
  })
  allowbanvisituser: boolean;

  @Column('tinyint', { name: 'allowmanagetag', width: 1, default: () => "'0'" })
  allowmanagetag: boolean;

  @Column('tinyint', {
    name: 'alloweditusertag',
    width: 1,
    default: () => "'0'",
  })
  alloweditusertag: boolean;
}
