'use client';
import { type FC, type ReactNode } from 'react';
import { StyledButton,  StyledRouteLink } from '../../styled/UI/StyledButton';

export interface ButtonProps {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;

    // action props
    variant?: string;
    category?: string;
    size?: string | number;
    fullWidth?: boolean;

    path?: string;
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    variant,
    category,
    size,
    fullWidth,
    children,
    path
}) => {

    const renderButton = () => (
        <StyledButton
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            variant={variant}
            category={category}
            size={size}
            fullWidth={fullWidth}
        >
            {children}
        </StyledButton>
    );

    return (
        path ? (
            <StyledRouteLink href={path}>
                {renderButton()}
            </StyledRouteLink>
        ) : renderButton()
    );
}

export default Button;
