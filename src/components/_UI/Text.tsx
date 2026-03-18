import { type FC, type ReactNode } from 'react';
import {
    StyledTitle,
    StyledSubtitle,
    StyledHighlight,
    StyledTextPersonalized,
    StyledParagraph
} from '../../styled/UI/StyledText';
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
}) => {
    const commonProps = {
        $name: name,
        $type: type,
        $color: color,
        $textAlign: textAlign,
        $marginTop: marginTop,
        $marginRight: marginRight,
        $marginBottom: marginBottom,
        $marginLeft: marginLeft,
        $paddingTop: paddingTop,
        $paddingRight: paddingRight,
        $paddingBottom: paddingBottom,
        $paddingLeft: paddingLeft,
        $ellipsisAt: ellipsisAt,
        $weight: weight,
        $line: line,
        $size: size,
    };

    const renderText = () => {
        if (name === 'hero' || name === 'title') {
            return <StyledTitle {...commonProps}>{children}</StyledTitle>;
        }

        if (name === 'subtitle') {
            return <StyledSubtitle {...commonProps}>{children}</StyledSubtitle>;
        }

        if (name === 'highlight') {
            return <StyledHighlight {...commonProps}>{children}</StyledHighlight>;
        }

        if (name === 'personalized') {
            return <StyledTextPersonalized {...commonProps}>{children}</StyledTextPersonalized>;
        }


        return (
            <StyledParagraph
                {...commonProps}
                $decoration={decoration}
            >
                {children}
            </StyledParagraph>
        );
    };

    return renderText();
};

export default Text;
