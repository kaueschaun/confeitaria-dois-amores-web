'use client';
import { type FC, type InputHTMLAttributes } from 'react';
import colors from '../../theme/colors';
import { Column } from '../../styled/alignment/Column';
import Text from './Text';
import styles from './FieldSet.module.scss';
import clsx from 'clsx';

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
    className,
    style,
    ...props
}) => {
    return (
        <Column
            className={clsx(styles.container, className)}
            style={{ marginTop, marginRight, marginBottom, marginLeft, ...style }}
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
            <input
                className={clsx(
                    styles.input,
                    {
                        [styles.inputError]: !!error,
                        [styles.inputRounded]: variant === 'rounded',
                        [styles.inputSquared]: variant === 'squared'
                    }
                )}
                {...props}
            />
            {error && (
                <Text
                    name="small"
                    marginTop="4px"
                    color={colors.danger}
                >
                    {error}
                </Text>
            )}
        </Column>
    );
};

export default FieldSet;