'use client';
import { type FC, type InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../theme/colors';
import { Column } from '../../styled/alignment/Column';
import Text from './Text';

interface FieldSetProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    error?: string;
    variant?: 'rounded' | 'squared';
}

const FieldSet: FC<FieldSetProps> = ({
    label,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    error,
    variant = 'squared',
    ...props
}) => {
    return (
        <Container
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
        >
            {label && (
                <Text 
                    name="personalized" 
                    weight="600" 
                    size="0.875rem" 
                    marginBottom="8px"
                    color={colors.night}
                >
                    {label}
                </Text>
            )}
            <StyledInput $hasError={!!error} $variant={variant} {...props} />
            {error && (
                <Text 
                    name="small" 
                    marginTop="4px" 
                    color={colors.danger}
                >
                    {error}
                </Text>
            )}
        </Container>
    );
};

export default FieldSet;

const Container = styled(Column)<{
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
}>`
    width: 100%;
    margin-top: ${({ marginTop }) => marginTop || '0'};
    margin-right: ${({ marginRight }) => marginRight || '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
    margin-left: ${({ marginLeft }) => marginLeft || '0'};
`;

const roundedStyles = css`
  border-radius: 50px;
`;

const squaredStyles = css`
  border-radius: 8px;
`;

const StyledInput = styled.input<{ $hasError?: boolean; $variant?: 'rounded' | 'squared' }>`
    width: 100%;
    height: 48px;
    padding: 0 1rem;
    background-color: ${colors.white};
    border: 1px solid ${({ $hasError }) => ($hasError ? colors.danger : colors.backgroundPrimary)};

    ${({ $variant }) => ($variant === 'rounded' ? roundedStyles : squaredStyles)}

    &:focus {
        outline: none;
        border-color: ${colors.primary};
    }
`;