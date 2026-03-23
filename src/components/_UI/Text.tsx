import { type FC, type ReactNode } from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';
import colors from '../../theme/colors';

type TextName =
    | 'hero'
    | 'title'
    | 'subtitle'
    | 'highlight'
    | 'default'
    | 'small'
    | 'personalized'
    | 'mini';

type TextType = 'normal' | 'bold' | 'italic';

export interface TextProps {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;

    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;

    name?: TextName;
    type?: TextType;
    decoration?: string;
    color?: string;
    ellipsisAt?: number;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    size?: string;
    weight?: string;
    line?: string;

    children?: ReactNode;
    className?: string;
}

const Text: FC<TextProps> = ({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    weight,
    line,
    size,

    name = 'default',
    type = 'normal',
    decoration = 'none',
    color = colors.night,
    ellipsisAt,

    textAlign,
    children,
    className,
}) => {
    const inlineStyles: any = {
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        textAlign,
        color,
    };

    if (ellipsisAt) {
        inlineStyles.maxWidth = `${ellipsisAt}px`;
    }

    if (name === 'personalized') {
        inlineStyles.fontSize = size || '16px';
        inlineStyles.fontWeight = weight || '400';
        inlineStyles.lineHeight = line || '1.5rem';
    }

    if (decoration && decoration !== 'none') {
        inlineStyles.textDecoration = decoration;
    }

    const computedClassName = clsx(
        styles.text,
        styles[`text--name-${name}`],
        styles[`text--type-${type}`],
        { [styles['text--ellipsis']]: ellipsisAt },
        className
    );

    if (name === 'hero' || name === 'title') {
        return <h1 className={computedClassName} style={inlineStyles}>{children}</h1>;
    }

    if (name === 'subtitle') {
        return <h2 className={computedClassName} style={inlineStyles}>{children}</h2>;
    }

    if (name === 'highlight') {
        return <span className={computedClassName} style={inlineStyles}>{children}</span>;
    }

    if (name === 'personalized') {
        return <p className={computedClassName} style={inlineStyles}>{children}</p>;
    }

    return (
        <p className={computedClassName} style={inlineStyles}>
            {children}
        </p>
    );
};

export default Text;
