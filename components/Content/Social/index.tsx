import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

type SocialType = 'qq' | 'wechat' | 'weibo' | 'twitter' | 'linkedin' | 'facebook';

interface SltSocialProps {
  socials: SocialType[]
}

const defaultProps: SltSocialProps = {
  socials: []
}

const SltSocial: NextPage<SltSocialProps> = (props: Partial<SltSocialProps>) => {
  const { socials = [] } = { ...defaultProps, ...props };
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.asPath)
  useEffect(() => {
    setUrl(encodeURIComponent(document.location.href))
    setTitle(encodeURIComponent(document.title))
    return () => {
      //
    }
  }, [])

  const getShareUrl = (social: SocialType) => {
    switch (social) {
      case 'qq':
        return `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`
      case 'weibo':
        return `https://service.weibo.com/share/share.php?type=button&language=zh_cn&title=${title}&searchPic=true&url=${url}`
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}`
      case 'facebook':
        return `https://www.facebook.com/sharer.php?u=${url}`
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}`
    }
    return null
  }

  const renderSocialBtn = (social: SocialType) => {
    const url = getShareUrl(social)
    return url ? (
      <a
        href={url}
        target="_blank"
        className={String(social)}
        rel="nofollow noreferrer"
      >
        <span>
          <i className={`iconfont icon-${social}`}></i>
        </span>
      </a>
    ) : null
  }

  return (
    <div className={styles.social}>
      {url && socials.map((social) => renderSocialBtn(social))}
    </div>
  )
}

export default SltSocial
