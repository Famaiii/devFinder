import styles from './InfoItem.module.scss'
import React from "react";

export interface InfoItemProps {
    icon: React.ReactNode,
    text?: string | null,
    isLink?: boolean,
}

export const InfoItem = ({icon, text, isLink}: InfoItemProps) => {
    const currentText = text || 'Not Available'
    let currentHRef = '';

    if (isLink) {
        currentHRef = text && text.startsWith('http') ? text : `https://${text}`;
    }

    return (
        <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
            {icon}
            <div>
                {isLink && text ? (
                    <a href={currentHRef}
                       target='_blank'
                       rel='noreferrer'
                       className={styles.link}>
                        currentText
                    </a>
                ) : currentText}
            </div>
        </div>
    )

};
